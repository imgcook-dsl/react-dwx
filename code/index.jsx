'use strict';

import React, { Component } from 'react';
import { fetch } from 'whatwg-fetch';
import jsonp from 'fetch-jsonp';
import styles from './style.js';
const print = function(value) {
  console.log(value);
};
class Page_0 extends Component {
  state = {
    data: [
      {
        title: '小户型卫浴怎样才能装得高大上？',
        coverImage: 'https://img.alicdn.com/tfs/TB1Txq6o7T2gK0jSZFkXXcIQFXa-684-684.png',
        readCount: 200,
        user: { userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png', userName: '时尚家居' },
        url: 'https://www.imgcook.com'
      },
      {
        title: '拥有超多功能的40平米简约小公寓了解一下',
        coverImage: 'https://img.alicdn.com/tfs/TB1XRQTo7P2gK0jSZPxXXacQpXa-684-648.png',
        readCount: 500,
        user: {
          userImage: 'https://img.alicdn.com/tfs/TB1DWe6oYj1gK0jSZFOXXc7GpXa-60-60.png',
          userName: '花花设计工作'
        },
        url: 'https://www.imgcook.com/docs'
      }
    ]
  };
  constructor(props, context) {
    super();
    console.log('super props');
    this.fetch_example();
    this.jsonp_example();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {}
  isReadCountShow(readCount) {
    return readCount > 300;
  }
  fetch_example() {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { method: 'GET', headers: '{"Content-Type":"json"}' })
      .then(response => response.json())
      .then((data, error) => {
        console.log('fetch example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  jsonp_example() {
    jsonp('https://assets.airbnb.com/frontend/search_results.js', { jsonpCallbackFunction: 'search_results', body: {} })
      .then(response => response.json())
      .then((data, error) => {
        console.log('jsonp example: ', data, error);
        return data;
      })
      .catch(e => {
        console.log('error', e);
      });
  }
  render() {
    return (
      <div
        className=""
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          height: '16.69rem'
        }}
      >
        {this.state.data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={e => {
                window.open(item.url, '_blank');
              }}
              data-url={item.url}
              key={item.index}
            >
              <div
                className=""
                style={{
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  opacity: '1.00',
                  width: '10.69rem',
                  height: '10.69rem'
                }}
              >
                <img
                  className=""
                  style={{
                    position: 'absolute',
                    top: '0.00rem',
                    left: '0.00rem',
                    width: '10.69rem',
                    height: '10.69rem',
                    overflow: 'hidden'
                  }}
                  src={'https://img.alicdn.com/tfs/TB1bLoWoYH1gK0jSZFwXXc7aXXa-684-684.png'}
                />
                <img
                  className=""
                  style={{
                    position: 'absolute',
                    top: '0.00rem',
                    left: '0.00rem',
                    opacity: '1.00',
                    width: '10.69rem',
                    height: '10.69rem'
                  }}
                  src={item.coverImage}
                />
                <div
                  className=""
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    position: 'relative',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: '0.56rem',
                    marginLeft: '0.56rem',
                    borderRadius: '0.47rem',
                    backgroundColor: 'rgba(0,0,0,0.40)',
                    paddingRight: '0.28rem',
                    paddingLeft: '0.31rem',
                    height: '0.94rem'
                  }}
                >
                  <img
                    className=""
                    style={{ opacity: '1.00', width: '0.44rem', height: '0.56rem' }}
                    src={'https://img.alicdn.com/tfs/TB1mtZRoVT7gK0jSZFpXXaTkpXa-28-36.png'}
                  />
                  <span
                    className=""
                    style={{
                      marginLeft: '0.13rem',
                      height: '0.69rem',
                      fontWeight: 400,
                      fontSize: '0.56rem',
                      color: '#ffffff',
                      lineHeight: '0.69rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    距离500m
                  </span>
                </div>
              </div>
              <div
                className=""
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  width: '10.69rem',
                  height: '3.56rem'
                }}
              >
                <span
                  className=""
                  style={{
                    marginTop: '0.69rem',
                    width: '9.38rem',
                    height: '2.75rem',
                    fontWeight: 400,
                    fontSize: '0.94rem',
                    color: '#335c0a',
                    lineHeight: '1.38rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {item.title}
                </span>
              </div>
              <div
                className=""
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderBottomLeftRadius: '0.38rem',
                  borderBottomRightRadius: '0.38rem',
                  backgroundColor: '#ffffff',
                  paddingRight: '0.53rem',
                  paddingLeft: '0.56rem',
                  width: '10.69rem',
                  height: '2.44rem',
                  overflow: 'hidden'
                }}
              >
                <div
                  className=""
                  style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: '0.94rem' }}
                >
                  <img
                    className=""
                    style={{ width: '0.94rem', height: '0.94rem' }}
                    src={'https://img.alicdn.com/tfs/TB1OvsYoW61gK0jSZFlXXXDKFXa-60-60.png'}
                  />
                  <span
                    className=""
                    style={{
                      marginLeft: '0.19rem',
                      height: '0.88rem',
                      fontWeight: 300,
                      fontSize: '0.75rem',
                      color: '#66b814',
                      lineHeight: '0.88rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.user.userName}
                  </span>
                </div>
                {this.isReadCountShow(item.readCount) && (
                  <div
                    className=""
                    style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', height: '0.94rem' }}
                  >
                    <img
                      className=""
                      style={{ width: '0.69rem', height: '0.69rem' }}
                      src={'https://img.alicdn.com/tfs/TB1arwYo7T2gK0jSZFkXXcIQFXa-46-44.png'}
                    />
                    <span
                      className=""
                      style={{
                        marginLeft: '0.16rem',
                        height: '0.81rem',
                        fontWeight: 400,
                        fontSize: '0.69rem',
                        color: '#99eb47',
                        lineHeight: '0.81rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.readCount}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Page_0;
