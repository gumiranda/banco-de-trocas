@echo off
setlocal enabledelayedexpansion

for /D /R "C:\Users\gus\Documents\devdoido\Nova pasta\CrazyCabPessenger\generators\templates\domain" %%G in (*RideTypes*) do (
    set "dirname=%%G"
    set "newname=!dirname:RideTypes=Domain!"
    ren "%%G" "!newname!"
)

endlocal
