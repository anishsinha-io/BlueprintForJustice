/** Blueprint For Justice
 ** Copyright (C) 2022 Anish Sinha
 **
 ** This program is free software: you can redistribute it and/or modify
 ** it under the terms of the GNU General Public License as published by
 ** the Free Software Foundation, either version 3 of the License, or
 ** (at your option) any later version.
 **
 ** This program is distributed in the hope that it will be useful,
 ** but WITHOUT ANY WARRANTY; without even the implied warranty of
 ** MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 ** GNU General Public License for more details.
 **
 ** You should have received a copy of the GNU General Public License
 ** along with this program.  If not, see http://www.gnu.org/licenses/.
 **/

import WandaJohnson from "assets/wanda-johnson-img-asset.png";
import Mother from "assets/mothers-story.png";

interface StoryAttrs {
  imgSrc: string;
  imgAlt?: string;
  story: string;
  storyTitle: string;
}

const BlueprintInAction = () => {
  const mainStories: StoryAttrs[] = [
    {
      imgSrc: WandaJohnson,
      imgAlt: "Wanda Johnson's story",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet nihil voluptatibus omnis culpa deleniti exercitationem. Labore perspiciatis deserunt eaque voluptates assumenda ipsum, accusamus est quos, adipisci, fugiat corporis ea!",
      storyTitle: "Wanda Johnson's story",
    },
    {
      imgSrc: Mother,
      imgAlt: "Mother's Story",
      story:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eveniet nihil voluptatibus omnis culpa deleniti exercitationem. Labore perspiciatis deserunt eaque voluptates assumenda ipsum, accusamus est quos, adipisci, fugiat corporis ea!",
      storyTitle: "Mother's story",
    },
  ];

  const storyHtml = mainStories.map((storyInfo: StoryAttrs, index) =>
    index % 2 === 0 ? (
      <div key={index} className="story-element">
        <img
          src={storyInfo.imgSrc}
          alt={storyInfo.imgAlt !== "" ? storyInfo.imgAlt : "story"}
          className="story-element__img"
        ></img>
        <div className="story-element__text">
          <h4>{storyInfo.storyTitle}</h4>
          {storyInfo.story}
        </div>
      </div>
    ) : (
      <div key={index} className="story-element">
        <div className="story-element__text">
          <h4>{storyInfo.storyTitle}</h4>
          {storyInfo.story}
        </div>
        <img
          src={storyInfo.imgSrc}
          alt={storyInfo.imgAlt !== "" ? storyInfo.imgAlt : "story"}
          className="story-element__img"
        ></img>
      </div>
    )
  );
  return (
    <>
      <div className="app-blueprint">
        <div className="app-blueprint__header">
          <h2>Blueprint in Action</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            delectus quis modi eaque libero ex magnam autem laborum, ab
            molestias, laboriosam, earum voluptatibus beatae? Eveniet saepe
            aliquam vel possimus fugit.
          </p>
        </div>
        <div className="app-blueprint__stories">{storyHtml}</div>
      </div>
    </>
  );
};

export default BlueprintInAction;
