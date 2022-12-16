<script lang="ts">
    let navOpen = false;
    let state: string | number = 0;
    let shapeHover = false;

    state = Math.floor(Math.random() * 6);

    setInterval(() => {
        if (navOpen && shapeHover === false) {
            state = "transition";
            setTimeout(() => {
                state = Math.floor(Math.random() * 6);
            }, 2500);
        }
    }, 6000);
</script>

<nav
    class="relative z-50 pl-2 pr-2 gap-4 w-screen h-[10vh] bg-secondary place-items-center font-bold flex" id="nav"
>
    <a rel="prefetch" href="/run=no" class="flex gap-4 place-items-center">
        <img src="/logo.png" alt="Codey Verse Logo" class="h-[6vh]" />
    </a>
    <img
        src="/menu-icon.svg"
        alt="Navbar Icon"
        class="ml-auto hover:cursor-pointer hover:scale-105 transition-all"
        on:click={() => (navOpen = !navOpen)}
    />
</nav>
<div id="navBorder" />

<nav
    class={`h-[90vh] w-screen ${
        navOpen === false ? "-translate-x-[100vw]" : ""
    } bg-primary absolute z-50 transition-all duration-[3s]`}
>
    <div class="hidden h-full w-full md:block">
        <a href="/?run=no" rel="prefetch"
            ><div
                class="bg-accent navShape1 absolute shape grid place-items-center"
                data-config={state}
                on:mouseenter={() => (shapeHover = true)}
                on:mouseleave={() => (shapeHover = false)}
            >
                <h3 class="lg:text-4xl md:text-2xl text-base-100 font-bold text-center">
                    Home
                </h3>
            </div></a
        >
        <a href="/posts" rel="prefetch">
            <div
                class="bg-secondary navShape2 absolute shape grid place-items-center"
                data-config={state}
                on:mouseenter={() => (shapeHover = true)}
                on:mouseleave={() => (shapeHover = false)}
            >
                <h3 class="lg:text-4xl md:text-2xl text-accent font-bold text-center">
                    Posts
                </h3>
            </div>
        </a>
        <a href="https://github.com/Alien10123/codeyverse-blog" target="_blank">
            <div
                class="bg-brand navShape3 absolute shape grid place-items-center"
                data-config={state}
                on:mouseenter={() => (shapeHover = true)}
                on:mouseleave={() => (shapeHover = false)}
            >
                <h3 class="lg:text-4xl md:text-2xl text-accent font-bold text-center">
                    Blog Github
                </h3>
            </div>
        </a>
        <a href="https://github.com/Alien10123/codeyverse" target="_blank">
            <div
                class="bg-neutral navShape4 absolute shape grid place-items-center"
                data-config={state}
                on:mouseenter={() => (shapeHover = true)}
                on:mouseleave={() => (shapeHover = false)}
            >
                <h3 class="lg:text-4xl md:text-2xl text-accent font-bold text-center">
                    Codey Verse Github
                </h3>
            </div>
        </a>
    </div>
</nav>
