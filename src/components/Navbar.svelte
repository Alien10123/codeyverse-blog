<script lang="ts">
    let navOpen = false;
    let state: string | number = 0;
    let shapeHover = false;

    state = 3;

    setInterval(() => {
        console.log(shapeHover, state);
        if (navOpen && shapeHover === false) {
            state = 3;
            setTimeout(() => {
                state = 3;
            }, 2500);
        }
    }, 7000);
</script>

<nav
    class="relative z-50 pl-2 pr-2 gap-4 w-screen h-[10vh] place-items-center border-b border-[#ffffff4d] font-bold flex"
    style="background: linear-gradient(180deg, rgba(75,125,219,1), rgba(187,210,255,1));"
>
    <a rel="prefetch" href="/" class="flex gap-4 place-items-center">
        <img src="/logo.png" alt="Codey Verse Logo" class="h-[8vh]" />
        <h1
            class="md:text-3xl hover:text-brand text-2xl font-bold hover:text-info transition-colors duration-30000"
        >
            The Codey Verse Blog
        </h1>
    </a>
    <img
        src="/menu-icon.svg"
        alt="Navbar Icon"
        class="ml-auto hover:cursor-pointer hover:scale-105 transition-all"
        on:click={() => (navOpen = !navOpen)}
    />
</nav>

<nav
    class={`h-[90vh] w-screen ${
        navOpen === false ? "-translate-x-[100vw]" : ""
    } bg-primary absolute z-50 transition-all duration-[3s]`}
>
    <div class="hidden h-full w-full md:block">
        <a href="/"
            ><div
                class="bg-accent navShape1 absolute shape grid place-items-center"
                data-config={state}
                on:mouseenter={() => (shapeHover = true)}
                on:mouseleave={() => (shapeHover = false)}
            ><h3 class="lg:text-4xl md:text-2xl text-base-100 font-bold">Home</h3></div></a
        >
        <a href="/posts">
            <div
            class="bg-secondary navShape2 absolute shape grid place-items-center"
            data-config={state}
            on:mouseenter={() => (shapeHover = true)}
            on:mouseleave={() => (shapeHover = false)}
            ><h3 class="lg:text-4xl md:text-2xl text-accent font-bold">Posts</h3></div>
        </a>
        <a href="https://github.com/Alien10123/codeyverse-blog" target="_blank">
            <div
            class="bg-brand navShape3 absolute shape grid place-items-center"
            data-config={state}
            on:mouseenter={() => (shapeHover = true)}
            on:mouseleave={() => (shapeHover = false)}
            >
        <h3 class="lg:text-4xl md:text-2xl text-accent font-bold">Blog Github</h3></div>
        </a>
        <a href="https://github.com/Alien10123/codeyverse" target="_blank">
            <div
            class="bg-neutral navShape4 absolute shape grid place-items-center"
            data-config={state}
            on:mouseenter={() => (shapeHover = true)}
            on:mouseleave={() => (shapeHover = false)}
            ><h3 class="lg:text-4xl md:text-2xl text-accent font-bold">Codey Verse Github</h3></div>
        </a>
    </div>
</nav>
