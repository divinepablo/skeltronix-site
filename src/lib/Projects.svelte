<script lang="ts">
  import Card from "./Card.svelte";
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <h1 class="text-white font-semibold mb-8 text-4xl">Projects</h1>

  <div class="grid gap-4 grid-cols-3">
    <Card
      name="skeltronix.xyz"
      description="This is site."
      githubURL="https://github.com/skeltoncodez/skeltronix-site"
    />
    <Card
      name="pasta.club/African Cheat"
      description="discontinued minecraft client from 2023. Made by raybo, divine, and BrettHax"
    />
    <Card
      name="Sleek"
      description="discontinued minecraft client from 2022. Made by many different devs, most notable: kansio, divine"
      githubURL="https://github.com/SleekCC/leaked-builds"
    />
    <Card
      name="Apefuscator"
      description="Java obfuscator made for fun. Made when I didn't have money for paid obfuscators."
      githubURL="https://github.com/skeltoncodez/apefuscator"
    />
    <Card
      name="K language"
      description="Language made for fun. Language was originally made with custom bytecode but took a compiled route using llvmlite."
      githubURL="https://github.com/skeltoncodez/klang"
    />
    <Card
      name="GPTBus/Hetero Bus"
      description="Java Event Bus made by ChatGPT."
      githubURL="https://github.com/skeltoncodez/gpt-bus"
    />
    <Card
      name="Minipix"
      description="Minecraft server made by me and a couple friends."
      ><div class="absolute bottom-0">
        <a
          href="https://minipix.net"
          class="text-blue-500 hover:text-blue-700 font-semibold bottom-0"
          >Site</a
        >
      </div></Card
    >
    <Card
      name="Steam Gen"
      description="Discontinued probably patched steam account generator made to bypass bans on games like CS:GO and Redmatch 2."
      githubURL="https://github.com/skeltoncodez/steam-gen"
    />
    <Card
      name="K operating system"
      description="Do not get this confused with KDE. Proof of concept operating system."
      githubURL="https://github.com/skeltoncodez/k-os"
    />
    <Card
      name="Add more"
      description="I truly make way too many projects and most you'll never hear about, if it's public it may be on my github."
      githubURL="https://github.com/skeltoncodez/"
    />
  </div>
</div>
