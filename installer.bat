@echo off

set "install_path="
if exist "%~dp0\app.asar" (
    if not exist "%~dp0\Deezer.exe" (
        echo Installation found on the same level as the installer.
        choice /c yn /m "Use this directory? "
        if errorlevel 2 goto check_local_app
        set "install_path=%~dp0"
    ) else (
        if exist "%~dp0\resources\app.asar" (
            echo It seems like you dropped the installer into the main folder of the Deezer installation, not the resources folder. This does not really matter, just wanted to let you know.
            choice /c yn /m "Use the directory at %~dp0resources? "
            if errorlevel 2 goto check_local_app
            set "install_path=%~dp0\resources"
        )
    )
)

:check_local_app
if "%install_path%"=="" (
    if exist "%localappdata%\Programs\deezer-desktop\resources\app.asar" (
        echo Installation found at %localappdata%\Programs\deezer-desktop\resources
        choice /c yn /m "Use this directory? "
        if errorlevel 2 goto specify_install_path
        set "install_path=%localappdata%\Programs\deezer-desktop\resources"
    )
)

:specify_install_path
if "%install_path%"=="" (
    set /p "install_path=No installation found, please specify a path (the path where the app.asar is located, probably ending with \resources), no quotes: "
)
if not exist "%install_path%" (
    echo Path is invalid
    goto :end
)

:normal_mode
echo.
echo Downloading prepacked app.asar
echo.

curl -s -L -o "%tmp%\app_patched.asar.zip" https://github.com/bertigert/DeezMod/releases/latest/download/app.asar.zip
if not exist "%tmp%\app_patched.asar.zip" (
    echo Failed to download app.asar zip
)

echo Extracting app.asar
tar -xf "%tmp%\app_patched.asar.zip" -C %install_path%\
if errorlevel 1 (
	echo Failed to extract app.asar zip
)
del "%tmp%\app_patched.asar.zip" >nul

goto :create_plugins_folder


:create_plugins_folder
echo.
if not exist "%localappdata%\DeezMod\Data\plugins" (
    echo Creating plugins folder
    md "%localappdata%\DeezMod\Data\plugins"
)
goto :end

:end
if exist "%tmp%\app_patched.asar.zip" (
	del "%tmp%\app_patched.asar.zip" >nul
)

set "install_path="
echo.
echo Finished, exiting
echo.
pause
