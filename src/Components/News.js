import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


export default class News extends Component {

    // const [articles, setArticles] = useState();
    articles = [];

    static propTypes ={
        page : 1,
        country : 'in',
        category :  PropTypes.string
    }
    static defaultProps = {
        page : 1,
        country : 'in',
        category :  PropTypes.string
    }

    constructor(props) {
        super(props);
        // console.log("Hello This is Contructor from News.js File");
        this.state = {

            articles: this.articles,
            page: 1, totalResults: this.totalResults,
            loading:false


        }
        document.title =this.props.category + " " + "| News Application";
    }
    
    async componentDidMount() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ec9d10e3dd740b392ff8e2dcf014c2e&pageSize=9`;
            this.setState({loading:true})
            let data = await fetch(url);
            let mainData = await data.json();
            this.setState({
                articles: mainData.articles,
                totalResults:mainData.totalResults,
                loading:false

            })
        }
        catch (error) {
            console.log("Error Found");

        }
    }
    handlePreviousClick = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ec9d10e3dd740b392ff8e2dcf014c2e&page=${this.state.page - 1}&pageSize=9`;
        this.setState({loading:true})
        let data = await fetch(url);
        let mainData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: mainData.articles,
            loading:false


        })
    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 5)) {

        }
        else {


            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6ec9d10e3dd740b392ff8e2dcf014c2e&page=${this.state.page + 1}&pageSize=9`;
            this.setState({loading:true})
            let data = await fetch(url);
            let mainData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: mainData.articles, loading:false

            })
        }

    }
    render() {
        return (
            <div className='container my-4'>
                <h1 className="text-center">{this.props.category+" News"}</h1>
                {this.state.loading && <Spinner/>}
                <div className='row'>
                    {!this.state.loading && this.state.articles.map((element) => {

                        return(<div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : "" + "..."} description={element.description ? element.description.slice(0, 85) : "" + "..."} imageUrl={element.urlToImage} newsUrl={element.url} time={element.publishedAt} author={element.author}/>
                        </div>)
                    })}

                    {/* <div className='col-md-4'>
                        <Newsitem title="My Title" description="My Description" />
                    </div>
                    <div className='col-md-4'>
                        <Newsitem title="My Title" description="My Description" />
                    </div> */}
                </div>
                <div class="container d-flex justify-content-around">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&laquo; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 5)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
                </div>




            </div>


        )
    }
}

