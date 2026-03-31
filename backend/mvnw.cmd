@ECHO OFF
SETLOCAL

SET "MAVEN_VERSION=3.9.9"
SET "WRAPPER_ROOT=%USERPROFILE%\.m2\wrapper\dists\apache-maven-%MAVEN_VERSION%"
SET "MAVEN_HOME=%WRAPPER_ROOT%\apache-maven-%MAVEN_VERSION%"
SET "MAVEN_BIN=%MAVEN_HOME%\bin\mvn.cmd"
SET "ARCHIVE_PATH=%WRAPPER_ROOT%\apache-maven-%MAVEN_VERSION%-bin.zip"
SET "DOWNLOAD_URL=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/%MAVEN_VERSION%/apache-maven-%MAVEN_VERSION%-bin.zip"

IF NOT EXIST "%MAVEN_BIN%" (
  powershell -NoProfile -ExecutionPolicy Bypass -Command ^
    "$ProgressPreference = 'SilentlyContinue';" ^
    "New-Item -ItemType Directory -Force -Path '%WRAPPER_ROOT%' | Out-Null;" ^
    "if (!(Test-Path '%ARCHIVE_PATH%')) { Invoke-WebRequest -Uri '%DOWNLOAD_URL%' -OutFile '%ARCHIVE_PATH%' };" ^
    "if (!(Test-Path '%MAVEN_BIN%')) { Expand-Archive -Path '%ARCHIVE_PATH%' -DestinationPath '%WRAPPER_ROOT%' -Force }"

  IF ERRORLEVEL 1 (
    ECHO Failed to prepare Maven %MAVEN_VERSION%.
    EXIT /B 1
  )
)

CALL "%MAVEN_BIN%" %*

