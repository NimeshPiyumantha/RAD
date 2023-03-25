import React, { Component } from 'react'
import Tag from '../Tag';

type PostProps ={
  id?: string;
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};

type PostState = {};
export default class Post extends Component<PostProps, PostState> {
  render() {
    return (
      <div className="p-4 border border-slate-400 w-full rounded-2xl mt-2">
        <h1 className="text-center">{this.props.title}</h1>
        <p>{this.props.description}</p>
        <span className="w-full mt-3 flex space-x-3">
          {this.props.hoursCount ? (
            <p>
              <strong>Hours Count</strong> : {this.props.hoursCount}
            </p>
          ) : null}
          {this.props.lecturerName ? (
            <p>
              <strong>Lecturer Name</strong> : {this.props.lecturerName}
            </p>
          ) : null}
          {this.props.tags.map((tagText) => (
            <Tag text={tagText} />
          ))}
        </span>
      </div>
    );
  }
}