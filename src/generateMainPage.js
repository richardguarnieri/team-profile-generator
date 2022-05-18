const generateMainPage = (managersModule, engineersModule, internsModule) => {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Tailwind CSS Custom Configuration -->
    <script>
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                'poppins': ['Poppins', 'sans-serif']
              },
            }
          }
        }
      </script>
</head>
<body class="">

    <header class="bg-gradient-to-r from-slate-900 to-slate-700">
        <h1 class="p-5 text-3xl font-extralight text-center text-white">Team Profile Generator</h1>
    </header>

    <main>

        <section class="my-5">
            <!-- Employee Profiles -->
            <div class="flex flex-col items-center">

                <!-- Manager Section -->
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <!-- Manager Header -->
                    <div class="text-2xl text-center lg:pr-10">
                        <p class="font-bold">Managers</p>
                    </div>
                    <!-- Manager Profiles -->
                    ${managersModule}
                </div>
                <!-- Engineer Section -->
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <!-- Engineer Header -->
                    <div class="text-2xl text-center lg:pr-10">
                        <p class="font-bold">Engineers</p>
                    </div>
                    <!-- Engineer Profiles -->
                    ${engineersModule}
                </div>
                <!-- Intern Section -->
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <!-- Intern Header -->
                    <div class="text-2xl text-center lg:pr-10">
                        <p class="font-bold">Interns<span class="hidden lg:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                    </div>
                    <!-- Intern Profiles -->
                    ${internsModule}
                </div>

            </div>
        </section>

    </main>
    
</body>
</html>
`
}

module.exports = generateMainPage;