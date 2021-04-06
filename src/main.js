function myFunction() {
  Logger.log(PropertiesService.getScriptProperties().getProperty('to'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('from'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('cc'));
  Logger.log(PropertiesService.getScriptProperties().getProperty('name'));
}


// メールを送る
function sendMail() {
  var mailto = PropertiesService.getScriptProperties().getProperty('to');
  var mailfrom = PropertiesService.getScriptProperties().getProperty('from');
  var mailcc = PropertiesService.getScriptProperties().getProperty('cc');
  var name = PropertiesService.getScriptProperties().getProperty('name');
  var subject = 'This is only a test.';
  var date = new Date();
  date.toLocaleString("ja");
  var body = 'このメールはテストメールです。送信日時：' + date.toString();
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