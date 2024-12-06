const loadData = async (readMarked) => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/retro-forum/posts"
    );
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);
    displayPosts(posts);
    marked(posts);
};

const displayPosts = (posts) => {
    const postsContainer = document.getElementById("posts-container");
    posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList = "card bg-[#a6a8fa] shadow-xl";
        postDiv.innerHTML = `
            <div class="card-body">
                <div class="flex gap-6">
                    <img class="w-16 h-16 rounded-lg" src="${post.image}" alt="" srcset="">
                    <div class="space-y-3">
                        <div class="space-x-6">
                            <span id="category" class="text-gray-500 ">${post.category}</span>
                            <span id="author" class="text-base text-gray-500">Author: ${post.author.name}</span>
                        </div>
                        <h2 class="">${post.title}</h2>
                        <p>${post.description}</p>
                        <div class="w-full border border-dotted"></div>
                        <div class="card-actions justify-between">
                            <div class="flex gap-10">
                                <p class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                    ${post.comment_count}</p>
                                <p class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                    ${post.view_count} View</p>
                                <p class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    ${post.posted_time} min</p>
                            </div>
                            
                            <button onClick="markPost('${post.title}', '${post.view_count} View')" class="home-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        postsContainer.appendChild(postDiv);
    });
};

const markPost = (title, views) => {
    const readMarkedContainer = document.getElementById("readMarkedContainer");
    const markedDiv = document.createElement("div");
    markedDiv.classList = "flex justify-between p-4 border bg-white rounded-lg";

    markedDiv.innerHTML = `
        <div>
            <h3>${title}</h3>
        </div>
        <p class="flex">${views}</p>
    `;
    readMarkedContainer.appendChild(markedDiv);
    // setTimeout(alert(`${title} marked as read!`), 5000);
};

loadData();

// const marked = (posts) => {
//     for (const post of posts) {
//         const mark = () => {
//             const readMarkedContainer = document.getElementById(
//                 "readMarkedContainer"
//             );
//             const div = document.createElement("div");
//             div.classList = "flex justify-between p-4 border";
//             readMarkedContainer.innerHTML = `
//                             <div>
//                                 <h3>$post.title</h3>
//                             </div>
//                             <p class="flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                                     stroke-width="1.5" stroke="currentColor" class="size-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                         d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
//                                     <path stroke-linecap="round" stroke-linejoin="round"
//                                         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                                 </svg> 1,568</p>
//     `;
//         };
//     }
//     alert("Post marked as favorite!");
// };

{/* <a onClick="mark()" class="">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
    </svg>
</a>; */}
