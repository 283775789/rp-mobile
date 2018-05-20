const path = require('path')
const gulp = require('gulp')
const spriteSmith = require('gulp.spritesmith')
const replace = require('gulp-replace')
const watch = require('gulp-watch')

function appSrc (dir) {
  return path.join(__dirname, 'src', dir)
}

const appPaths = {
  src: {
    css: appSrc('static/css'),
    icons: [appSrc('static/icons/*.*'), appSrc('static/icons/.*.*')],
    images: appSrc('static/images')
  }
}

const appTasks = {
  sprite: function () {
    const opt = {
      imgName: 'icons.png',
      cssName: 'sprite.css',
      cssFormat: 'css',
      imgPath: '../images/icons.png',
      padding: 10,
      cssTemplate: 'csstemplate/rem.handlebars',
      cssVarMap: function (sprite) {
        const cssName = sprite.name.replace(/;/g, ':').replace(/\)/g, '>')
        const nameList = cssName.split(',')

        for (var i = 0; i < nameList.length; i++) {
          nameList[i] = /\s(\S*)$/.test(nameList[i])
            ? nameList[i].replace(/\s(\S*)$/, ' .pl-ico.x$1')
            : nameList[i].replace(/(^.*$)/, '.pl-ico.x$1')
        }

        sprite.rem = {
          offset_x: sprite.x / 40 + 'rem',
          offset_y: sprite.y / 40 + 'rem',
          width: sprite.width / 40 + 'rem',
          height: sprite.height / 40 + 'rem',
          total_width: sprite.total_width / 40 + 'rem',
          total_height: sprite.total_height / 40 + 'rem'
        }

        sprite.name = nameList.join(',')
      }
    }

    const spriteData = gulp.src(appPaths.src.icons).pipe(spriteSmith(opt))
    spriteData.img.pipe(gulp.dest(appPaths.src.images))

    const gtReg = /&gt;/g
    return spriteData.css.pipe(replace(gtReg, '>')).pipe(gulp.dest(appPaths.src.css))
  }
}

gulp.task('sprite', appTasks.sprite)
gulp.task('watch', ['sprite'], function () {
  return watch(appPaths.src.icons, function () {
    appTasks.sprite()
  })
})
