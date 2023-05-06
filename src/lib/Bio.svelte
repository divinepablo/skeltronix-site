<script lang="ts">
  import { Icon, Link } from "svelte-hero-icons";
  const name = "skelton";
  const profession = "Developer";
  const description =
    "I develop random things.\nCurrent projects: serenityservices.xyz\nLanguages: Java, JavaScript, Python, C++, Go";
  const github = "skeltoncodez";
  const socials = [
    { name: "Discord", link: "https://discord.gg/jPMyuATAMv" },
    { name: "GitHub", link: "https://github.com/skeltoncodez" },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCJu6UgM1vROPJLpufKokT7Q",
    },
    { name: "Telegram", link: "https://t.me/omgsleekdev" },
  ];
</script>

<div class="flex justify-center items-center h-screen">
  <div class="bg-gray-200 dark:bg-gray-700 rounded-lg p-8">
    <div class="flex justify-center">
      <img
        class="h-16 w-16 rounded-full"
        src="https://avatars.githubusercontent.com/{github}?size=128"
        alt="Github Avatar"
      />
    </div>
    <div class="text-center mt-4">
      <h1 class="text-2xl font-semibold dark:text-white">{name}</h1>
      <p class="text-gray-600 dark:text-gray-200 mt-2">{profession}</p>
      {#each description.split("\n") as desc}
        <p class="text-gray-600 dark:text-gray-200 mt-2">{desc}</p>
      {/each}
      <div class="mt-4 flex items-center">
        <Icon src={Link} class="mr-2" size="20" />
        {#each socials as social}
          <a
            href={social.link}
            target="_blank"
            class="text-blue-500 hover:text-blue-700 font-semibold mr-2"
            >{social.name}</a
          >
        {/each}
      </div>
    </div>
  </div>
</div>
