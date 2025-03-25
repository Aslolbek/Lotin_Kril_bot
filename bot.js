const {Bot, InputFile} = require("grammy")
require('dotenv').config()
const express = require('express')
const TOKEN = "8094748437:AAE_jNSVoYwXjQA4pFbKHSA9nA3YEw-8B6s"
const bot = new Bot(TOKEN)
const app = express()

bot.command("start", async (ctx) => {
    await ctx.reply("Assalomu alaykum! Botimizga xush kelibsiz! Biz siz yuborgan matnni Lotin/krel hariflarida yoki kril/lotin hariflarida yozib beramiz " )
})

bot.command("about", async (ctx) => {
    await ctx.reply("Biz siz yuborgan Lotin harflarini krel hariflarida yoki kril harflardagini lotin hariflarida yozib beramiz" )
})


bot.on("message", async (ctx) => {
    const text = ctx.message.text


    const latin = /^[A-Za-z]/;
    const kril = /^[А-Яа-яЁё]/;
  
    if (latin.test(text)) {

        let matn=''
        for (let i = 0; i < text.length; i++) {
          const char = text.charAt(i).toLowerCase();
          switch (char) {
            case 'a':
              matn += 'а';
              break;
            case 'b':
              matn += 'б';
              break;
            case 's':
              matn += 'с';
              break;
            case 'd':
              matn += 'д';
              break;
            case 'e':
              matn += 'е';
              break;
            case 'f':
              matn += 'ф';
              break;
            case 'g':
              matn += 'г';
              break;
            case 'h': if(char ==='h'){
              if(text.charAt(i-1)?.toLowerCase() === 's'){
                matn = matn.slice(0, -1) + 'Ш';
              } else if(text.charAt(i-1)?.toLowerCase() === 'c') {
                matn = matn.slice(0, -1) + 'ч';

              } else {

                matn += 'ҳ';
              }
            }
              break;
            case 'i':
              matn += 'и';
              break;
            case 'j':
              matn += 'ж';
              break;
            case 'k':
              matn += 'к';
              break;
            case 'l':
              matn += 'л';
              break;
            case 'm':
              matn += 'м';
              break;
            case 'n':
              matn += 'н';
              break;
            case 'o':
              matn += 'о';
              break;
            case 'p':
              matn += 'п';
              break;
            case 'q':
              matn += 'қ';
              break;
            case 'r':
              matn += 'р';
              break;
            case 'c':
              matn += 'с';
              break;
            case 't':
              matn += 'т';
              break;
            case 'u':
              matn += 'у';
              break;
            case 'v':
              matn += 'в';
              break;
            case 'x':
              matn += 'х';
              break;
            case 'y':
              matn += 'й';
              break;
            case 'z':
              matn += 'з';
              break;
            case ' ':
                matn += ' ';
               break;
            default:
              matn += char;
          }
        }
          await ctx.reply(matn)

    
    } else if (kril.test(text)) {



        let matn = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i).toLowerCase();
    switch (char) {
      case 'а':
        matn += 'a';
        break;
      case 'б':
        matn += 'b';
        break;
      case 'с':
        matn += 's';
        break;
      case 'д':
        matn += 'd';
        break;
      case 'е':
        matn += 'e';
        break;
      case 'ф':
        matn += 'f';
        break;
      case 'г':
        matn += 'g';
        break;
      case 'ҳ':
        matn += 'h';
        break;
      case 'и':
        matn += 'i';
        break;
      case 'ж':
        matn += 'j';
        break;
      case 'к':
        matn += 'k';
        break;
      case 'л':
        matn += 'l';
        break;
      case 'м':
        matn += 'm';
        break;
      case 'н':
        matn += 'n';
        break;
      case 'о':
        matn += 'o';
        break;
      case 'п':
        matn += 'p';
        break;
      case 'қ':
        matn += 'q';
        break;
      case 'р':
        matn += 'r';
        break;
      case 'с':
        matn += 's';
        break;
      case 'т':
        matn += 't';
        break;
      case 'у':
        matn += 'u';
        break;
      case 'в':
        matn += 'v';
        break;
      case 'х':
        matn += 'x';
        break;
      case 'й':
        matn += 'y';
        break;
      case 'з':
        matn += 'z';
        break;
      case 'ц':
        matn += 't';
        break;
      case 'ы':
            matn += 'i';
            break;
      case 'щ':
            matn += 'sh';
            break;
      case 'ў':
            matn += `o'`;
            break;
      case 'ғ':
            matn += `g'`;
            break;
      case 'ч':
            matn += `ch`;
            break;
      case 'ь':
            matn += ``;
            break;
      case 'ш':
                matn += 'sh';
                break;
      case 'я':
                matn += 'ya';
                break;
      case 'э':
                matn += 'e';
                break;
      case 'ё':
                matn += 'yo';
                break;
     case ' ':
           matn += ' ';
          break;
      default:
        matn += char;
    }
  }
  await ctx.reply(matn)

    } else {

        await ctx.reply('Biz LOTIN yoki KRIL alifbosidagi sozlar ustida ishlay olamiz')
      
    }

})




bot.start()


app.get("/", (req, res) => {
  res.send("Bot is running...");
});

const PORT = process.env.PORT || 4000; 

app.listen(PORT,  () => {
  console.log(`Server running on port 5000`);
});