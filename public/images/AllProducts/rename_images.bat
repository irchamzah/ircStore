@echo off
setlocal enabledelayedexpansion
set count=1
for %%f in (*.jpg) do (
    ren "%%f" "img!count!.jpg"
    set /a count+=1
)
echo Semua file .jpg telah diubah.
pause