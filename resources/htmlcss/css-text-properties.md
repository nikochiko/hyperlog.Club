---
title: CSS Text Properties
slug: htmlcss/css-text-properties
author: Aditya Giri, Marksheet.io
resource: htmlcss
---

Alongside the several `font-*` properties, CSS provides many `text-*` properties.

### text-align

The `text-align` property must be applied on a block-level element and defines how its text and children inline elements are horizontally aligned.

```css
body{ text-align: left;}
```

The most used values are:

* **left**
* **right**
* **center**
* **justify**

These values correspond to the same alignment buttons you find in Microsoft Word or Photohop.

<div class="info">
The <code>justify</code> value is <b>not</b> recommended. Although it might look visually appealing because it forms a rectangle of text, it is very hard to read.
</div>

The `text-align` default value is `start`. Basically, `start` can either be `left` or `right`, depending on the **direction** set on the HTML document.

`direction` is a CSS property that can either be `ltr` (left to right) or `rtl` (right to left):

* if `ltr` is chosen, `start` equals to `left`
* if `rtl` is chosen, `start` equals to `right`

### text-decoration

The `text-decoration` property is used to add a line on your text.

Default value: `none`

```css
.deleted{ text-decoration: line-through;}
```

<div class="result">
  <p style="text-decoration: line-through;">Deleted</p>
</div>

Possible values:

* `overline`
* `underline`
* `line-through`

By default, HTML links (`<a>`) have a `text-decoration: underline;` applied to them. One of the first things coders usually do is to remove this default styling:

```css
a{ text-decoration: none;}
```

### text-indent

The `text-indent` property allows to add space before the first letter of the first line of a block-level element.

Default value: `0` (zero)

```css
blockquote{ text-indent: 30px;}
```

<div class="result" style="max-width: 400px;">
  <blockquote style="text-indent: 30px;">People always make the mistake of thinking art is created for them. But really, art is a private language for sophisticates to congratulate themselves on their superiority to the rest of the world. As my artist’s statement explains, my work is utterly incomprehensible and is therefore full of deep significance.</blockquote>
</div>

Notice how only the **first line** is indented. If you want to offset the whole block of text, use [paddings](/css-padding.html).

<div class="info">
As for the <code>font-size</code> property, you can use <code>px</code>, <code>em</code>, or even <code>%</code> values.
</div>


### text-shadow

If you've ever used Photoshop, you've probably used the drop shadow tool. In CSS, you can add shadow to a text, to make it either fancier or more readable.

You define:

* `x` the horizontal offset
* `y` the vertical offset
* the `blur`
* the `color`

```css
h1{ text-shadow: 0 2px 5px rgba(0,0,0,0.5);}
```

<div class="result">
  <h1 style="text-shadow: 0 2px 5px rgba(0,0,0,0.5);">Hello World</h1>
</div>

Only the `x` and `y` values are required. The `blur` defaults to `0` (zero), while the `color` defaults to the color of the text.

<div class="info">
This property is tricky, so use it with parsimony and don't go crazy!
</div>