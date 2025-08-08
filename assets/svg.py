from PIL import Image, ImageDraw, ImageFont

# Create base
img = Image.new("RGB", (1200, 630), (12, 16, 32))
draw = ImageDraw.Draw(img)

# Text content
text1 = "Abin Shrestha"
text2 = "Data Science | Data Engineer"
text3 = "Portfolio launching soon"

# Simple positions (tweak if you have a font file)
draw.text((60, 80), text1, fill=(255,255,255))
draw.text((60, 160), text2, fill=(180,185,200))
draw.text((60, 260), text3, fill=(170,185,250))

img.save("assets/og.png")
