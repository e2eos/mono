import {NgModule} from '@angular/core';
import {IconsProviderModule} from './icons-provider.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {GridRowComponent} from './components/grid-row/grid-row.component';
import {GridColComponent} from './components/grid-col/grid-col.component';
import {JsonEditorComponent} from './components/json-editor/json-editor.component';
import {ButtonComponent} from './components/button/button.component';
import {ContainerComponent} from './components/container/container.component';
import {IconComponent} from './components/icon/icon.component';
import {InputComponent} from './components/input/input.component';
import {InputGroupComponent} from './components/input-group/input-group.component';
import {LayoutContentComponent} from './components/layout-content/layout-content.component';
import {LayoutFooterComponent} from './components/layout-footer/layout-footer.component';
import {LayoutHeaderComponent} from './components/layout-header/layout-header.component';
import {LayoutSiderComponent} from './components/layout-sider/layout-sider.component';
import {CardComponent} from './components/card/card.component';
import {CardMetaComponent} from './components/card-meta/card-meta.component';
import {CardGridComponent} from './components/card-grid/card-grid.component';
import {CardTabComponent} from './components/card-tab/card-tab.component';
import {CollapseComponent} from './components/collapse/collapse.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { MenuGroupComponent } from './components/menu-group/menu-group.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  entryComponents: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent,
    CardComponent,
    CardMetaComponent,
    CardGridComponent,
    CardTabComponent,
    CollapseComponent,
    MenuComponent,
    MenuItemComponent,
    SubmenuComponent,
    MenuGroupComponent,
    SelectComponent
  ],
  declarations: [
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent,
    CardComponent,
    CardMetaComponent,
    CardGridComponent,
    CardTabComponent,
    CollapseComponent,
    MenuComponent,
    MenuItemComponent,
    SubmenuComponent,
    MenuGroupComponent,
    SelectComponent
  ],
  imports: [
    NgJsonEditorModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    NgZorroAntdModule,
    JsonEditorComponent,
    ButtonComponent,
    ContainerComponent,
    IconComponent,
    GridRowComponent,
    GridColComponent,
    InputComponent,
    InputGroupComponent,
    LayoutContentComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutSiderComponent,
    CardComponent,
    CardMetaComponent,
    CardGridComponent,
    CardTabComponent,
    CollapseComponent,
    MenuComponent,
    MenuItemComponent,
    SubmenuComponent,
    MenuGroupComponent,
    SelectComponent
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
})
export class ComponentModule {
}
