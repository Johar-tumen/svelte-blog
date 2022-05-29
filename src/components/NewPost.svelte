<script>
// @ts-nocheck

    let postName;
    let postBody;

    const addPost = async () =>{
        const dataAdd = await fetch('/api/addPost', {
            method:'POST',
            body: JSON.stringify({
                postName,
                postBody
            })
        })
    }
</script>

<form class="flex flex-col m-5" on:submit|preventDefault={addPost} autocomplete="off">
    <label>
        Название:
        <input class="border w-full p-1" type="text" name="name" bind:value={postName} />
    </label>
    <label>
        Текст статьи:
        <textarea class="border w-full p-5 h-40" type="text" name="body" bind:value={postBody} />
    </label>
    <input class="bg-blue-200 text-blue-500 p-1 rounded-sm cursor-pointer hover:bg-blue-300" type="submit" value="Добавить статью" />
</form>