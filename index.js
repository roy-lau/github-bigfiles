const fs = require("fs")

for (let i = (2 * 1024); i >= 0; i--) {
	createBigFile(`./out/${i}.txt`,'MB')
}
/**
 * 创建大文件
 *
 * @param  {String} fileName 文件名
 * @param  {String} unit     单位
 * @return {[type]}          [description]
 */
function createBigFile(fileName = 'big-file.txt', unit = 'KB') {
    console.time("创建大文件用时")

    let num = 0,
        flag = true


    if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName)
    }

    while (flag) {

        try {
            fs.appendFileSync(fileName, num + '\n', 'utf8');
            let states = fs.statSync(fileName),
                size = bytesToSize(states.size);

            if (size.indexOf(unit) > -1) {
                console.info('文件大小：', size)
                flag = false
            } else {
                num++
            }

        } catch (e) {
            flag = false
            console.error(e)
        }

    }
    console.timeEnd("创建大文件用时")

}

/**
 * states.size 字节
 * 字节转换公式:
 *
 *  1024b = 1kb
 *  1024kb = 1mb
 *  1024mb = 1gb
 */

function bytesToSize(bytes) {
    if (bytes === 0) return '0 B';

    let k = 1024,

        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],

        i = Math.floor(Math.log(bytes) / Math.log(k));

    return (bytes / Math.pow(k, i)) + ' ' + sizes[i];

}
