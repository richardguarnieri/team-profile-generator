const generateEngineer = ({ name, id, email, github }) => {
return `
<div class="m-1 group flex flex-col justify-between border rounded-md transition hover:border-blue-500">
    <div class="flex flex-col justify-center items-center p-3">
        <p class="text-xl font-medium">${name}</p>
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
            <p>${id}</p>
        </div>
        <div class="flex justify-between space-x-5">
            <p>Email:</p>
            <a href="mailto:${email}" class="hover:text-yellow-300">${email}</a>
        </div>
        <div class="flex justify-between space-x-5">
            <p>GitHub:</p>
            <a href="https://github.com/${github}" target="_blank" class="hover:text-yellow-300">${github}</a>
        </div>    
    </div>
</div>
`
}

module.exports = generateEngineer;