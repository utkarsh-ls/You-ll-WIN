import cv2

img_orig = cv2.imread('./sprites/intro/intro_bg.png', cv2.IMREAD_UNCHANGED)
img = cv2.imread('./sprites/intro/intro_bg-new.png', cv2.IMREAD_UNCHANGED)

img2 = cv2.resize(img, (img_orig.shape[1], img_orig.shape[0]), interpolation = cv2.INTER_AREA)

#Save resized image
cv2.imwrite('./sprites/intro/intro_bg-new.png', img2)
# cv2.imwrite('./sprites/intro/intro_logo2.png', img)