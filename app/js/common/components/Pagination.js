import React, {Component} from 'react';

class Pagination extends Component{

    onClickPrev(){
        this.props.onClickPrev();
    }

    onClickNext(){
        this.props.onClickNext();
    }

    onClickPage(pageNumber){
        this.props.onClickPage();
    }

    renderPrevButton(){
    if(this.props.pageCount<=6) return "";
    return <div className={"prev "+(this.props.currentPage==1?"disabled":"")} onClick={this.onClickPrev.bind(this)}><i className="i-chevron-left"></i></div>
    }

    renderNextButton(){
        if(this.props.pageCount<=6) return "";
        return <div className={"next "+(this.props.currentPage==this.props.pageCount?"disabled":"")} onClick={this.onClickNext.bind(this)}><i className="i-chevron-right"></i></div>
    }

    renderEmptyButton(){
        if(this.props.pageCount<=6) return "";
        return <li className="empty"><span>{"..."}</span></li>
    }

    renderNumbers(){
        var pageCount = this.props.pageCount;
        var currentPage = this.props.currentPage;
        var pages = [],
            start = [],
            end = [],
            middle = [];
        var i;
        var separator = [null];
        if(pageCount <= 7){
            for(i=1; i<=pageCount; i++){
                pages.push(i);
            }
        }
        else{
            start = [1,2,3];
            end = [pageCount-2,pageCount-1,pageCount];
            if(currentPage<=2 || currentPage>=pageCount-1){
                pages = start.concat(separator).concat(end);
            }
            else{
                if(currentPage == 3){
                    middle = [3,4];
                    start = [1,2];
                    end = [pageCount-1,pageCount];
                    pages = start.concat(middle).concat(separator).concat(end);
                }
                else if(currentPage == pageCount-2){
                    middle = [pageCount-3, pageCount-2];
                    start = [1,2];
                    end = [pageCount-1,pageCount];
                    pages = start.concat(separator).concat(middle).concat(end);
                }
                else{
                    start = [1];
                    end = [pageCount];
                    middle = [currentPage-1, currentPage, currentPage+1];
                    pages = start.concat(separator).concat(middle).concat(separator).concat(end);
                }
            }
        }
        var numbers = pages.map(function(number,i){
            if(number==null) return <li className="empty"><span>{"..."}</span></li>
            return (
                    <li onClick={this.onClickPage.bind(this, number)} className={number==currentPage?"current":""}>{number}</li>
                )
        }.bind(this));
        return numbers;
    }

    render(){
        if(this.props.pageCount==1) return <div></div>
        return(
            <div className="pagination">
                {this.renderPrevButton()}
                <ul>
                    {this.renderNumbers()}
                </ul>
                {this.renderNextButton()}
            </div>
        )
    }
}

Pagination.propTypes = {
    pageCount : React.PropTypes.number,
    currentPage : React.PropTypes.number,
    onClickPrev : React.PropTypes.func,
    onClickNext : React.PropTypes.func,
    onClickPage : React.PropTypes.func,

}
const noop = () => {};
Pagination.defaultProps = {
    pageCount : 1,
    currentPage : 1,
    onClickPrev : noop,
    onClickNext : noop,
    onClickPage : noop
}
module.exports = Pagination;
