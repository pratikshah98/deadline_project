# ==== BACKEND SETUP ====
cd backend

npm init -y
npm install express cors

# Create index.js (manually or copy-paste the server code)
node index.js   # Runs on http://localhost:3000


# ==== FRONTEND SETUP ====
cd ../frontend

npm install

# Set API URL in environment.ts
# Open src/environments/environment.ts and update:
# export const environment = {
#   production: false,
#   apiUrl: 'http://localhost:3000/api'
# }

ng serve   # Runs on http://localhost:4200


# ==== GIT SETUP ====
cd ..

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/deadline.git
git push -u origin master


# ==== DEPLOY FRONTEND TO VERCEL ====
# 1. Go to https://vercel.com
# 2. Import GitHub repo
# 3. Select /frontend folder as root
# 4. Set:
#    - Build command: npm run build
#    - Output directory: dist/frontend
#    - Add env variable if needed: apiUrl = https://your-backend-url/api


# ==== DEPLOY BACKEND TO vercel
# Connect GitHub and deploy /backend folder
# Copy the deployed URL

# Then update frontend environment.prod.ts:
# export const environment = {
#   production: true,
#   apiUrl: 'https://your-backend-url/api'
# }

# Rebuild Angular frontend
cd frontend
ng build --configuration production
