# Image-Service created by Vlad Mansurov
This is service which content images jpeg or png format. Images are called using a URL
To get one of the image formats you need to enter the URL :
 -- if png format:
    http://localhost:9999/image.png (not necessary "image.png" as you have image1.png or 123.png)
 -- if jpg format:
    http://localhost:9999/image.jpg (not necessary "image.png" as you have image1.jpg or 123.jpg)
 -- if you enter unknow URL as that image there is no such image 
    for example -- http://localhost:9999/smile.jpg 
    You get post "404 Not Found" because server don't find image.
__________________________________________________________________________________________________
Это сервис, который содержит изображения формата jpeg или png. Изображения вызываются с помощью URL-адреса
Чтобы получить один из форматов изображений вам нужно ввести URL адрес :
 -- если формат png:
    http://localhost:9999/image.png (не обязательно " изображение.png " как у вас есть image1.png или 123.формат PNG)
 -- если формат jpg:
    http://localhost:9999/image.jpg (не обязательно "изображение.png " как у вас есть image1.jpg или 123.JPG)
 -- если вы входите подозрительные URL-адреса, как этот образ нет такого изображения
    Например - http://localhost:9999/smile.JPG
    Вы получаете сообщение "404 Not Found, потому что сервер не находит изображение..
