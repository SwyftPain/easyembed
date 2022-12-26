## EasyEmbed

Request it in your file like:
```js
const { EasyEmbed } = require('sp-easyembed');
```

Then you can use it like this:
```js
const embed = new EasyEmbed();
embed.setTitle('Title');
```

What is worth noting and the changes compared to the discord.js version of EmbedBuilder is that you can add author and footer as strings, instead of objects:
```js
const embed = new EasyEmbed();
embed.setAuthor("Author name", "Author Icon URL", "Author URL");
```

There is also ``addBlankField`` method that adds a blank field that can be either inline or not.
There is ``addField`` method that allows you to add a single field which is also added as strings.

The ``addFields`` method accept objects, arrays and array of arrays.

There is also extensive case insensitive list of colors.

Colors accept strings, hex codes or decimal numbers.