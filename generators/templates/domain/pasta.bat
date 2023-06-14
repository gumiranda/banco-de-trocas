@echo off
setlocal enabledelayedexpansion

for /R "C:\Users\gus\Documents\devdoido\Nova pasta\CrazyCabPessenger\generators\templates\domain" %%G in (*RideTypes*) do (
    set "dirname=%%~dpG"
    set "newname=!dirname:RideTypes=Domain!"
    move "%%G" "!newname!"
)

endlocal
