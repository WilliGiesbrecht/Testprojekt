let newStorys = [{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
{
    'author': 'GenialReich',
    'image': './Img/genial.jpg'
},
];
let newPosts = [{
    'author': 'GenialReich',
    'image': './Img/profile-Ich.jpg',
    'description': 'Text für den Post. Eine Beschreibung oder Umschreibung',
    'location': 'London',
    'pic': './Img/genial.jpg',
    'comment': 'Beispiel Text',
    'commentauthor': 'Hans.Spiel'
},
{
    'author': 'GenialReich',
    'image': './Img/profile-Ich.jpg',
    'description': 'Text für den Post. Eine Beschreibung oder Umschreibung',
    'location': 'London',
    'pic': './Img/genial.jpg',
    'comment': 'Beispiel Text',
    'commentauthor': 'Hans.Spiel'
},
{
    'author': 'GenialReich',
    'image': './Img/profile-Ich.jpg',
    'description': 'Text für den Post. Eine Beschreibung oder Umschreibung',
    'location': 'London',
    'pic': './Img/genial.jpg',
    'comment': 'Beispiel Text',
    'commentauthor': 'Hans.Spiel'
},
{
    'author': 'GenialReich',
    'image': './Img/profile-Ich.jpg',
    'description': 'Text für den Post. Eine Beschreibung oder Umschreibung',
    'location': 'London',
    'pic': './Img/genial.jpg',
    'comment': 'Beispiel Text',
    'commentauthor': 'Hans.Spiel'
},
{
    'author': 'GenialReich',
    'image': './Img/profile-Ich.jpg',
    'description': 'Text für den Post. Eine Beschreibung oder Umschreibung',
    'location': 'London',
    'pic': './Img/genial.jpg',
    'comment': 'Beispiel Text',
    'commentauthor': 'Hans.Spiel'
},
];

window.onscroll = function () { scroll() };

function render() {
    document.getElementById('posts').innerHTML += '';
    document.getElementById('story').innerHTML += '';
    for (let i = 0; i < newStorys.length; i++) {
        const newStory = newStorys[i];
        document.getElementById('story').innerHTML += `
       <div class="story">
            <div class="storyImg"><img src="${newStory['image']}"></div>
            <div class="storyAuthor"><p>${newStory['author']}</p></div>
       </div>
       `;
    }
    for (let i = 0; i < newPosts.length; i++) {
        const newPost = newPosts[i];
        document.getElementById('posts').innerHTML +=`
        <div class="post">
            <div class="postTitelDiv">
                <div class="titelImg"><img src="${newPost['image']}"></div>
                <div class="titelAuthor"><p>${newPost['author']}</p></div>
                <div>...</div>
            </div>
            <div class="postImgDiv">
                <div class="picDiv"><img src="${newPost['pic']}"></div>
            </div>
            <div class="postCommentDiv">
                <div class="commentIconBar">
                    <div class="iconBar1">
                        <img src="./Img/heart.png">
                        <img src="./Img/speech-bubble.png">
                        <img src="./Img/paperplane.png">
                    </div>
                    <div class="iconBar2">
                        <img src="./Img/bookmark.png">
                    </div>     
                </div>
                <div class="commentDiv">
                    <div class="descriptionPart">
                        <div class="descriptionAuthor">${newPost['author']}</div>
                        <div class="description">${newPost['description']}</div>
                    </div>
                    <div class="commentheadline">Kommentare</div>
                    <div class="comment">
                        <div class="commentAuthor">${newPost['commentauthor']}</div>
                        <div class="commentText">${newPost['comment']}</div>
                        <div class="commentLike"><img src="./Img/heart.png"></div>
                    </div>
                </div>
                <div class="commentField">
                    <div class="commentSmiley"><img src="./Img/smiley.png"></div>
                    <div class="commentInputField"><input type="text" placeholder="Kommentieren ..."></div>
                    <div class="commentPostButton"><button>Posten</button></div>
                </div>
            </div>
        </div>
        `;
    }
}

function scroll() {
    if (window.screenX <= 1835) {
        document.getElementById("rightDiv").style.right = (420 - window.screenX) + 'px';
    } else {
        document.getElementById("rightDiv").style.right = (420 + window.screenX) + 'px';
    }
}
