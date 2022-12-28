/**
 * A class for creating and modifying Discord embeds easily.
 *
 * @example
 * const embed = new EasyEmbed()();
 * @returns {EasyEmbed}
 */
class EasyEmbed {
  constructor() {
    this.embed = { type: "rich", description: "" };

    // Mapping of color words to color values
    this.colors = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32,
      zenith: 0x9e9e9e,
    };
  }

  /**
   * Sets the title of the embed.
   *
   * @param {string} title - The title to set.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setTitle("Hello, World!"); // sets the title to "Hello, World!"
   */
  setTitle(title) {
    if (typeof title === "string") {
      this.embed.title = title;
    } else {
      console.error("Invalid title: must be a string");
    }
  }

  /**
   * Sets the description of the embed.
   *
   * @param {string} description - The description to set.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setDescription("This is a description."); // sets the description to "This is a description."
   */
  setDescription(description) {
    if (typeof description === "string") {
      this.embed.description = description;
    } else {
      console.error("Invalid description: must be a string");
    }
  }

  /**
   * Sets the color of the embed.
   * @param {number|string} color - The color to set, represented as a decimal number, hex code or a color word.
   * @returns {void}
   * @example
   * let embed = new EasyEmbed();
   * embed.setColor(0xff0000); // sets the color to red (decimal value)
   * embed.setColor("#ff0000"); // sets the color to red (hex code)
   * embed.setColor("Red"); // sets the color to red (color word)
   */
  setColor(color) {
    color = color.toLowerCase();
    if (color === "random") {
      // Generate a random number between 0 and the number of colors
      const randomIndex = Math.floor(
        Math.random() * Object.keys(this.colors).length
      );

      // Get the name of the color at the random index
      const randomColorName = Object.keys(this.colors)[randomIndex];

      // Set the color of the embed to the random color
      this.embed.color = this.colors[randomColorName];
    } else if (this.colors[color]) {
      // Set the color of the embed to the provided color
      this.embed.color = this.colors[color];
    } else if (color[0] === "#") {
      // Convert hex value to number
      color = parseInt(color.slice(1), 16);
      this.embed.color = color;
    } else if (typeof color === "number") {
      this.embed.color = color;
    } else {
      throw new Error(
        "Invalid color: must be a number, a valid color word, or a hex value"
      );
    }
  }

  /**
   * Adds a field to the embed.
   *
   * @param {string} name - The name of the field.
   * @param {string} value - The value of the field.
   * @param {boolean|string} [inline=true] - Whether the field should be displayed inline or not. Can be a boolean or a string with the value "true" or "false".
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.addField("Field Name", "Field Value", true); // adds a field with name "Field Name" and value "Field Value" that is displayed inline
   * embed.addField("Field Name 2", "Field Value 2", false); // adds a field with name "Field Name 2" and value "Field Value 2" that is not displayed inline
   */
  addField(name, value, inline) {
    if (typeof name === "string" && typeof value === "string") {
      if (!this.embed.fields) this.embed.fields = [];

      if (typeof inline === "string") {
        // If it's a string, convert it to a boolean
        inline = inline.toLowerCase() === "true";
      }

      this.embed.fields.push({ name, value, inline: inline || false });
    } else {
      console.error("Invalid field: name and value must be strings");
    }
  }

  /**
   * Adds fields to the embed.
   *
   * @param {...(string[])|...{name: string, value: string, inline?: boolean}} fields - The fields to add. Each field must have a name and a value, both of which must be strings. The inline parameter is optional and defaults to false. Can also be passed as an array of arrays, with each inner array containing the field name, field value, and inline value in that order.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   *
   * // Using an array of objects
   * embed.addFields({name: "Field Name", value: "Field Value", inline: true}, {name: "Field Name 2", value: "Field Value 2", inline: true});
   *
   * // Using a regular array
   * embed.addFields(['Field Name', 'Field Value', true], ['Field Name 2', 'Field Value 2', false]);
   *
   * // Using an array of arrays
   * const fields = [
   *   ['Field Name', 'Field Value', true],
   *   ['Field Name 2', 'Field Value 2', false]
   * ];
   * embed.addFields(fields);
   */
  addFields(...fields) {
    if (Array.isArray(fields)) {
      if (!this.embed.fields) this.embed.fields = [];
      fields.forEach((field) => {
        if (
          Array.isArray(field) &&
          field.length === 3 &&
          typeof field[0] === "string" &&
          typeof field[1] === "string"
        ) {
          // Set default value for inline to false
          const inline = field[2] || false;
          this.embed.fields.push({ name: field[0], value: field[1], inline });
        } else if (
          typeof field.name === "string" &&
          typeof field.value === "string"
        ) {
          field.inline = field.inline || false;
          this.embed.fields.push(field);
        } else {
          console.error("Invalid field: both name and value must be strings");
        }
      });
    } else {
      console.error("Invalid fields: must be an array");
    }
  }

  /**
   * Sets the author of the embed.
   *
   * @param {string} name - The name of the author.
   * @param {string} [iconURL=''] - The URL of the icon for the author. Optional.
   * @param {string} [url] - The URL of the author. Optional.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed();
   * embed.setAuthor("John Smith", "https://example.com/icon.png", "https://example.com");  // sets all three fields
   * embed.setAuthor("Jane Doe", "https://example.com");  // sets name and url, iconURL is set to default value
   * embed.setAuthor("Bob Smith");  // sets name only, iconURL and url are set to default values
   */
  setAuthor(name, iconURL = "", url) {
    if (typeof name === "string") {
      this.embed.author = { name };
      if (typeof iconURL === "string") {
        this.embed.author.icon_url = iconURL;
      }
      if (typeof url === "string") {
        this.embed.author.url = url;
      }
    } else {
      console.error("Invalid author: name must be a string");
    }
  }

  /**
   * Adds a blank field to the embed.
   *
   * @param {boolean} [inline=true] - Whether the field should be displayed inline.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.addBlankField(); // adds a blank field to the embed
   * embed.addBlankField(false); // adds a blank field that is not displayed inline
   */
  addBlankField(inline = true) {
    if (!this.embed.fields) this.embed.fields = [];
    this.embed.fields.push({ name: "\u200B", value: "\u200B", inline });
  }

  /**
   * Sets the footer of the embed.
   *
   * @param {string} text - The text to display in the footer.
   * @param {string} [iconURL] - The URL of the icon to display in the footer.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setFooter("This is the footer");
   * embed.setFooter("This is the footer", "https://example.com/footer-icon.png");
   */
  setFooter(text, iconURL) {
    if (typeof text === "string") {
      this.embed.footer = { text };
      if (typeof iconURL === "string") {
        this.embed.footer.icon_url = iconURL;
      }
    } else {
      console.error("Invalid footer: text must be a string");
    }
  }

  /**
   * Sets the thumbnail of the embed.
   *
   * @param {string} url - The URL of the thumbnail.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setThumbnail("https://example.com/thumbnail.png");
   */
  setThumbnail(url) {
    if (typeof url === "string") {
      this.embed.thumbnail = { url };
    } else {
      console.error("Invalid thumbnail: url must be a string");
    }
  }

  /**
   * Sets the image of the embed.
   *
   * @param {string} url - The URL of the image.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setImage("https://example.com/image.png");
   */
  setImage(url) {
    if (typeof url === "string") {
      this.embed.image = { url };
    } else {
      console.error("Invalid image: url must be a string");
    }
  }

  /**
   * Sets the timestamp of the embed.
   *
   * @param {boolean} [timestamp=true] - Whether to include the current timestamp or not.
   * @returns {void}
   *
   * @example
   * let embed = new EasyEmbed()();
   * embed.setTimestamp(); // includes the current timestamp in the embed
   * embed.setTimestamp(false); // does not include the timestamp in the embed
   */
  setTimestamp(currentTime) {
    if (currentTime) {
      this.embed.timestamp = new Date();
    }
  }

  // new method
  toJSON() {
    return this.embed;
  }
}

module.exports = {
  EasyEmbed: EasyEmbed,
};
