import os

structure = {
    "backend/controllers": ["authController.js", "userController.js", "swapController.js"],
    "backend/models": ["User.js", "Swap.js"],
    "backend/routes": ["authRoutes.js", "userRoutes.js", "swapRoutes.js"],
    "backend/config": ["db.js"],
    "backend/utils": ["authMiddleware.js"],
    "backend": ["server.js", ".env", "package.json"],
    "frontend/public": ["index.html"],
    "frontend/src/components": ["Navbar.jsx", "ProfileCard.jsx", "RequestModal.jsx"],
    "frontend/src/pages": [
        "HomePage.jsx", "LoginPage.jsx", "UserProfile.jsx",
        "ViewUser.jsx", "RequestForm.jsx", "SwapDashboard.jsx"
    ],
    "frontend/src": ["App.js", "index.js", "api.js"],
    "frontend": ["package.json"],
}

for folder, files in structure.items():
    os.makedirs(folder, exist_ok=True)
    for file in files:
        with open(os.path.join(folder, file), 'w') as f:
            f.write("")
        print(f"✅ Created: {os.path.join(folder, file)}")
