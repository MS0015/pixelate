var Jimp = require("jimp");

async function call() {
  const img = await Jimp.read(
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    (err, lenna) => {
      if (err) throw err;
      lenna.quality(60).pixelate(100).posterize(30).write("output.jpg");
      console.log("lenna=>", lenna.bitmap.data);
    }
  );
  return img;
}

call();
