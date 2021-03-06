import { Component, OnInit, Input } from '@angular/core';
import { ComponentBase, AstNode, NodeConfig, } from 'e2eos-common';

export const TAG_NAME = 'e2eos-ng-antd-button';

export const NODE_CONFIG: NodeConfig = {
  name: TAG_NAME,
  values: Object.freeze({
    nzGhost: false,
    nzLoading: false,
    nzShape: '',
    nzSize: 'default',
    nzType: 'default',
    nzBlock: false
  }),
  attrs: [
    {
      key: 'nzGhost',
      type: 'boolean',
      name: 'nzGhost',
      desc: '幽灵属性，使按钮背景透明'
    },
    {
      key: 'nzLoading',
      type: 'boolean',
      name: 'nzLoading',
      desc: '设置按钮载入状态'
    },
    {
      key: 'nzShape',
      type: 'select',
      name: 'nzShape',
      desc: '设置按钮形状，可选值为 circleround 或者不设',
      options: [{
        label: 'circle',
        value: 'circle'
      }, {
        label: 'round',
        value: 'round'
      }]
    },
    {
      key: 'nzSize',
      type: 'select',
      name: 'nzSize',
      clearable: false,
      desc: '设置按钮大小，可选值为 smalllarge 或者不设',
      options: [{
        label: 'large',
        value: 'large'
      }, {
        label: 'small',
        value: 'small'
      }, {
        label: 'default',
        value: 'default'
      }]
    },
    {
      key: 'nzType',
      type: 'select',
      name: 'nzType',
      clearable: false,
      desc: '设置按钮类型',
      options: [{
        label: 'primary',
        value: 'primary'
      }, {
        label: 'dashed',
        value: 'dashed'
      }, {
        label: 'default',
        value: 'default'
      }, {
        label: 'danger',
        value: 'danger'
      }, {
        label: 'link',
        value: 'link'
      }]
    },
    {
      key: 'nzBlock',
      type: 'boolean',
      name: 'nzBlock',
      desc: '将按钮宽度调整为其父宽度的选项'
    },
  ],
  children: ['按钮']
};

export interface AstButtonAttrs {
  nzGhost?: boolean;
  nzLoading?: boolean;
  nzShape?: 'circle' | 'round' | undefined;
  nzSize?: 'large' | 'small' | 'default';
  nzType?: 'primary' | 'dashed' | 'danger' | 'default' | 'link';
  nzBlock?: boolean;
}

@Component({
  selector: TAG_NAME,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements ComponentBase, OnInit {

  @Input() node: AstNode = {
    tag: TAG_NAME,
    attrs: NODE_CONFIG.attrs,
    children: NODE_CONFIG.children
  };

  get attrs(): AstButtonAttrs {
    return this.node.attrs || NODE_CONFIG.attrs;
  }

  constructor() { }

  ngOnInit() {
  }

}
