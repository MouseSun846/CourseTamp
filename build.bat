cli publish --platform h5 --project CourseTamp && rd /q /s .\\docs && xcopy .\\unpackage\\dist\\build\\web\\* .\\docs\\  /E /I /H /Y 