import React from "react"

export default class News extends React.Component{
    state={
        news:[
            {
                key:1,
                title:"Nunc eu posuere erat.",
                content:"Cras sit amet bibendum mi. Integer feugiat urna porttitor ante luctus, et lacinia sapien ultricies. Morbi pellentesque quam mi, vitae imperdiet neque sollicitudin ut. Pellentesque ut nisi id tortor bibendum consequat non sit amet ante. Donec non magna nisi. Quisque ac nisi felis. Curabitur a quam sed dui porttitor varius. Proin maximus orci mauris, at vestibulum odio finibus non. Praesent luctus velit vitae turpis sodales, consectetur dapibus diam bibendum. Nulla eget malesuada erat. In accumsan, orci in maximus sollicitudin, quam sapien ultrices purus, sit amet rhoncus sapien ligula et tellus. Donec tincidunt magna non orci ullamcorper efficitur. Pellentesque tristique libero a augue molestie efficitur. Proin orci diam, tincidunt in ex sit amet, placerat feugiat orci. Suspendisse et faucibus elit."
            },
            {
                key:2,
                title:"Aliquam sagittis pharetra ipsum id commodo",
                content:"Nunc ut ultrices mi. Fusce vel libero lorem. Vivamus dictum massa non lorem venenatis pharetra. Cras gravida, ligula ut eleifend vulputate, purus lectus dignissim neque, non molestie mauris ligula sed est. Vestibulum bibendum lectus nisi. Etiam nibh felis, ultrices efficitur sapien non, convallis faucibus risus. Aliquam nisl diam, sodales nec pulvinar eget, lobortis ut nibh. Cras rutrum lectus ac enim ultricies accumsan. Vivamus sit amet quam vel nibh condimentum pharetra. Sed augue turpis, gravida non ex fermentum, pretium fermentum orci. Aenean sit amet lectus nisi. Nulla varius dui fermentum est vehicula, non gravida dolor iaculis. Nam ac diam felis. Aliquam ullamcorper turpis at ipsum vehicula, semper placerat justo sagittis. Etiam lectus ex, rhoncus ut urna id, dictum ultricies nulla."
            },
            {
                key:3,
                title:"In et augue iaculis",
                content:"Nunc ut ultrices mi. Fusce vel libero lorem. Vivamus dictum massa non lorem venenatis pharetra. Cras gravida, ligula ut eleifend vulputate, purus lectus dignissim neque, non molestie mauris ligula sed est. Vestibulum bibendum lectus nisi. Etiam nibh felis, ultrices efficitur sapien non, convallis faucibus risus. Aliquam nisl diam, sodales nec pulvinar eget, lobortis ut nibh. Cras rutrum lectus ac enim ultricies accumsan. Vivamus sit amet quam vel nibh condimentum pharetra. Sed augue turpis, gravida non ex fermentum, pretium fermentum orci. Aenean sit amet lectus nisi. Nulla varius dui fermentum est vehicula, non gravida dolor iaculis. Nam ac diam felis. Aliquam ullamcorper turpis at ipsum vehicula, semper placerat justo sagittis. Etiam lectus ex, rhoncus ut urna id, dictum ultricies nulla."
            }
        ]
    }
    render(){
        return (
        <div>
            {
                this.state.news.map(article =>(
                    <div key={article.key}>
                        <h2>{article.title}</h2>
                        <div>{article.content}</div>
                    </div>
                ))
            }
        </div>);
    }
}