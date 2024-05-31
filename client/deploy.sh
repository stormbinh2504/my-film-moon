echo "Building app..."
npm run build   

echo "Deploy files to server..."
scp -r ./build/* root@cokhithvietnam:/var/www/binhhuun/html/

echo "Done!"
