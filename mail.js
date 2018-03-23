/**
 *
 * @Description 邮件发送 sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 * @Author Amor
 * @Created 2016/04/26 15:10
 * 技术只是解决问题的选择,而不是解决问题的根本...
 * 我是Amor,为发骚而生!
 *
 */

const nodemailer = require('nodemailer')
const config = require('./config')
//根据配置文件生成 smtpTransport
transporter = nodemailer.createTransport({
    host: config.email.host,
    secureConnection: true, // use SSL
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: config.email.user,
        pass: config.email.password // QQ邮箱需要使用授权码
    }
});

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} text 发送的内容
 */
sendMail = function (recipient, subject, text) {
    transporter.sendMail({
        from: '"Amor" <852246538@qq.com>',
        to: recipient,
        subject: subject,
        text: text
    }, function (error, response) {
        if (error) {
            return console.log(error);
        }
        console.log('发送成功')
    });
}

module.exports = {
    sendMail
};
