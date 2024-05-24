echo "Building app..."
npm run build   

echo "Deploy files to server..."
scp -r ./build/* root@cokhithvietnam:/var/www/14.225.217.113/html/

echo "Done!"
