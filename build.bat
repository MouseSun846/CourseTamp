@REM cd ..
@REM cli publish --platform h5 --project CourseTamp 
@REM cd /d .\\CourseTamp
rd /q /s .\\docs 
xcopy .\\unpackage\\dist\\build\\web\\* .\\docs\\  /E /I /H /Y 