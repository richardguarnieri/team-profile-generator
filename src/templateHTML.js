const templateHTML = `
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
                    <div id="managers" class="flex flex-wrap justify-around my-5 lg:space-x-3 lg:border-l lg:pl-10">
                        <!-- Manager Profile #1 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Manager</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Manager Profile #2 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Manager</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Manager Profile #3 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Manager</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>

                    </div>
                </div>
                <!-- Engineer Section -->
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <!-- Engineer Header -->
                    <div class="text-2xl text-center lg:pr-10">
                        <p class="font-bold">Engineers</p>
                    </div>
                    <!-- Engineer Profiles -->
                    <div id="engineers" class="flex flex-wrap justify-around my-5 lg:space-x-3 lg:border-l lg:pl-10">
                        <!-- Engineer Profile #1 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Engineer</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Engineer Profile #2 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Engineer</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Engineer Profile #3 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                                    </svg>
                                    <p class="text-lg">Engineer</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>

                    </div>
                </div>
                <!-- Intern Section -->
                <div class="flex flex-col lg:flex-row lg:items-center">
                    <!-- Intern Header -->
                    <div class="text-2xl text-center lg:pr-10">
                        <p class="font-bold">Interns<span class="hidden lg:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
                    </div>
                    <!-- Intern Profiles -->
                    <div id="interns" class="flex flex-wrap justify-around my-5 lg:space-x-3 lg:border-l lg:pl-10">
                        <!-- Intern Profile #1 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                                    </svg>
                                    <p class="text-lg">Intern</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Intern Profile #2 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                                    </svg>
                                    <p class="text-lg">Intern</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>
                        <!-- Intern Profile #3 -->
                        <div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
                            <div class="flex flex-col justify-center items-center p-3">
                                <p class="text-xl font-medium">Jared</p>
                                <div class="relative flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="absolute h-6 w-6 -left-8 top-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                                    </svg>
                                    <p class="text-lg">Intern</p>
                                </div>
                            </div>
                            <div class="flex flex-col p-3 bg-slate-500 text-white font-extralight transition group-hover:bg-blue-600">
                                <div class="flex justify-between space-x-5">
                                    <p>Employee ID:</p>
                                    <p>12345</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Email:</p>
                                    <a href="mailto:example@example.com" class="hover:text-yellow-300">example@example.com</a>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>Office #:</p>
                                    <p>5511119999</p>
                                </div>
                                <div class="flex justify-between space-x-5">
                                    <p>GitHub:</p>
                                    <a href="https://github.com/richardguarnieri" class="hover:text-yellow-300">richardguarnieri</a>
                                </div>    
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>

    </main>
    
</body>
</html>
`