
<script context="module">
    // @ts-ignore
    export async function load({ fetch }) {
        const res = await fetch('/api/endpoint.json');
        if (res.ok) {
            return {
                props: {
                    articles: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error("Could not load"),
        };
    }
</script>

<script>
    import Post from '../components/Post.svelte';
    import NewPost from '../components/NewPost.svelte';
import Layout from './__layout.svelte';
    export let articles;
    let latestArticles = articles.articles;
    console.log(latestArticles)
    
</script>
{#each latestArticles as article}
    <Post {...article} />
{/each}

<NewPost />
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
