module.exports.config = {
  name: "fontig",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "๐ช๐ฬ๐๐ ๐ป๐๐ฬ๐๐",
  description: "๐โ๐ข๐ฆ๐ฬฬ๐ ๐๐๐๐ก ๐โ๐ขฬฬ ( ๐โ๐ฬ๐๐ ๐๐ฬฬ๐ข )",
  commandCategory: "game",
  usages: "fontig <nแปi dung>",
  cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
 var text = args.join("");
     text = text;
       text = text.replace(/ /g, ` `)
.replace(/a/g, `๐`)
.replace(/b/g, `๐`)
.replace(/c/g, `๐`)
.replace(/d/g, `๐`)
.replace(/e/g, `๐`)
.replace(/f/g, `๐`)
.replace(/g/g, `๐`)
.replace(/h/g, `๐`)
.replace(/i/g, `๐`)
.replace(/j/g, `๐`)
.replace(/k/g, `๐`)
.replace(/l/g, `๐`)
.replace(/m/g, `๐`)
.replace(/n/g, `๐`)
.replace(/o/g, `๐`)
.replace(/p/g, `๐`)
.replace(/q/g, `๐`)
.replace(/r/g, `๐`)
.replace(/s/g, `๐`)
.replace(/t/g, `๐`)
.replace(/u/g, `๐`)
.replace(/v/g, `๐`)
.replace(/x/g, `๐ก`)
.replace(/y/g, `๐ข`)
.replace(/w/g, `๐ `)
.replace(/z/g, `๐ฃ`)
.replace(/Q/g, `๐`)
.replace(/W/g, `๐`)
.replace(/E/g, `๐ด`)
.replace(/R/g, `๐`)
.replace(/T/g, `๐`)
.replace(/Y/g, `๐`)
.replace(/U/g, `๐`)
.replace(/I/g, `๐ธ`)
.replace(/O/g, `๐พ`)
.replace(/P/g, `๐ฟ`)
.replace(/A/g, `๐ฐ`)
.replace(/S/g, `๐`)
.replace(/D/g, `๐ณ`)
.replace(/F/g, `๐ต`)
.replace(/G/g, `๐ถ`)
.replace(/H/g, `๐ท`)
.replace(/J/g, `๐น`)
.replace(/K/g, `๐บ`)
.replace(/L/g, `๐ป`)
.replace(/Z/g, `๐`)
.replace(/X/g, `๐`)
.replace(/C/g, `๐ฒ`)
.replace(/V/g, `๐`)
.replace(/B/g, `๐ฑ`)
.replace(/N/g, `๐ฝ`)
.replace(/M/g, `๐ผ`)
.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, " ");
var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
var num = (arr.length/6)-1;
var main = arr.slice(0,6);
var extra = arr.splice(6);
var msg = "";
var mainlength = main.length;
for(let i = 0; i < mainlength; i++) {
  var txt = main[i];
  for(let o = 0; o < num; o++) {
    txt += extra[i+(o*6)];
  }
  msg += txt+"\n";
}
return api.sendMessage(msg+""+"๐ฆ๐ ๐ช๐ฬ๐๐ ๐ป๐๐ฬ๐๐ ๐๐ฆ", event.threadID, event.messageID);
}