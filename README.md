# ordered-dither-maker

tool for creating ordered dither threshold textures

- [itch.io](https://seansleblanc.itch.io/ordered-dither-maker)
- [github.io](https://seleb.github.io/ordered-dither-maker/)

![Screenshot showing UI](./cover.gif)

This tool allows you to create textures that can be used as threshold maps for [ordered dithering](https://en.wikipedia.org/wiki/Ordered_dithering), a technique usually implemented using programmatically generated Bayer matrices.

The drawing grid allows you to visualize each "layer" of the threshold map, and to build up the final texture additively. The preview area applies a basic posterize + dither through post-processing using the generated texture (source available [here](https://github.com/seleb/ordered-dither-maker/blob/main/src/app/fragment.ts)).

Tips:

- Drag the bar between the output and preview sections to resize
- Use <kbd>ArrowLeft</kbd> and <kbd>ArrowRight</kbd> to change the current layer while drawing

Randomized preview images sourced from a [British Library collection](https://www.flickr.com/photos/britishlibrary/albums/72157641858423503) of public domain works.
