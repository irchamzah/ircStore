@echo off
setlocal enabledelayedexpansion

:: Set the maximum width
set max_width=450

:: Loop through all .jpg files in the current directory
for %%f in (*.jpg) do (
    echo Resizing %%f ...
    magick "%%f" -resize %max_width%x "%%~nf_resized.jpg"
)

echo All images have been resized.
pause