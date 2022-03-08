source = "main.html"
output = "index.html"

sourceFile = open(source, "r")
outputFile = open(output, "w")

sourceLines = sourceFile.readlines()

for sourceLine in sourceLines:
    temp = sourceLine.strip().split()
    
    if len(temp) == 4 and temp[0] == "<!--" and temp[1] == "TEMPLATE":
        template = temp[2]
        template = template[1:-1]
        templateFile = open(template, "r")
        templateLines = templateFile.readlines()

        indentCount = len(sourceLine) - len(sourceLine.lstrip())
        indentation = " " * indentCount
        
        for templateLine in templateLines:
            outputFile.write(indentation + templateLine)
    else:
        outputFile.write(sourceLine)

sourceFile.close()
outputFile.close()