function myFunction() {
  Logger.log(PropertiesService.getScriptProperties().getProperty('to'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('from'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('cc'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('name'));
}


// メールを送る
function sendMail() {
  const mailto = PropertiesService.getScriptProperties().getProperty('to');
  const mailfrom = PropertiesService.getScriptProperties().getProperty('from');
  const mailcc = PropertiesService.getScriptProperties().getProperty('cc');
  const name = PropertiesService.getScriptProperties().getProperty('name');
  const subject = 'This is only a test.';
  const date = new Date();
  date.toLocaleString("ja");
  const body = 'このメールはテストメールです。送信日時：' + date.toString();
  try {
    GmailApp.sendEmail(mailto, subject, body, {
      cc: mailcc,
      from: mailfrom,
      name: name,
      replyTo: mailfrom 
    });
  } catch(e) {
     Logger.log(e);
  }
}
