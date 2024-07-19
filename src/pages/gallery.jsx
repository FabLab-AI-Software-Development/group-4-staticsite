<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Gallery</title>
    <style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
        }
        .gallery {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            padding: 20px;
        }
        .gallery img {
            border: 5px solid white;
            width: 200px;
            height: auto;
            cursor: pointer;
        }
        .description {
            text-align: center;
            margin-top: 20px;
            display: none;
        }
    </style>
    <script>
        function showDescription(desc) {
            document.getElementById('description').innerText = desc;
            document.getElementById('description').style.display = 'block';
        }
    </script>
</head>
<body>
    <div class="gallery">
        <img src="https://www.rawpixel.com/image/6153767/png-tiger-animal#eyJrZXlzIjoidGlnZXIiLCJzb3J0ZWRLZXlzIjoidGlnZXIifQ==" alt="Image 1" onclick="showDescription('Team Leader')">
        <img src="image2.jpg" alt="Image 2" onclick="showDescription('Description for Image 2')">
        <img src="image3.jpg" alt="Image 3" onclick="showDescription('Description for Image 3')">
        <img src="image4.jpg" alt="Image 4" onclick="showDescription('Description for Image 4')">
        <img src="image5.jpg" alt="Image 5" onclick="showDescription('Description for Image 5')">
    </div>
    <div id="description" class="description"></div>
</body>
</html>
