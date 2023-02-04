<script lang="ts">
  import { Button, Meta, TextLink } from 'ui';
  import { isLoggedIn, logIn, logOut, user, type Inputs } from '$lib/nhost';

  let inputs: Inputs = {
    email: '',
    password: '',
  };

  async function handleSubmit() {
    if ($isLoggedIn) {
      await logOut();
    } else {
      await logIn(inputs);
    }
  }

  $: meta = {
    title: 'Admin | 📔 Notes - usagizmo.com',
    canonical: 'https://usagizmo/notes/admin',
  } as const;
</script>

<Meta {...meta} />

<div class="mx-auto max-w-prose">
  <h1 class="mb-12 text-center text-4xl font-bold">Admin</h1>

  <main>
    {#if $isLoggedIn}
      <div class="mb-8 grid place-content-center text-3xl">
        <TextLink href="/notes" blank={false}>📔 Notes</TextLink>
      </div>
    {/if}

    <form on:submit|preventDefault={handleSubmit}>
      <div class="grid place-content-center">
        <div class="flex flex-col gap-3">
          <svelte:element this="label" class="flex items-center gap-2">
            <span class="w-10">email:</span>
            {#if $isLoggedIn}
              <span class="text-gray-400">{$user?.email}</span>
            {:else}
              <input
                type="text"
                class="border-divider rounded border bg-transparent px-2 py-1 duration-150 focus:border-white focus:outline-none"
                bind:value={inputs.email}
              />
            {/if}
          </svelte:element>
          <svelte:element this="label" class="flex items-center gap-2">
            {#if !$isLoggedIn}
              <span class="w-10">pass:</span>
              <input
                type="text"
                class="border-divider rounded border bg-transparent px-2 py-1 duration-150 focus:border-white focus:outline-none"
                bind:value={inputs.password}
              />
            {/if}
          </svelte:element>
        </div>
        <div class="mt-6 flex justify-center">
          <Button type="submit">
            <span>Log {$isLoggedIn ? 'out' : 'in'}</span>
          </Button>
        </div>
      </div>
    </form>
  </main>
</div>
