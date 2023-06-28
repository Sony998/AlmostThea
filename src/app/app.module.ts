import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/oneProduct/product/product.component';
import { NavbarComponent } from './pages/oneProduct/navbar/navbar.component';
import { ChoiceComponent } from './pages/oneProduct/choice/choice.component';
import { MenuComponent } from './pages/oneProduct/menu/menu.component';
import { PostComponent } from './pages/post/post/post.component';
import { PostMenuComponent } from './pages/post/post-menu/post-menu.component';
import { FrameComponent } from './pages/post/frame/frame.component';
import { EditMenuComponent } from './pages/post/edit-menu/edit-menu.component';
import { DataFormComponent } from './pages/dataForm/data-form/data-form.component';
import { FormComponent } from './pages/dataForm/form/form.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from './pages/dataForm/pop-up/pop-up.component';
import { ShoppingCarComponent } from './pages/shopping-car/shopping-car.component';
import { MainComponent } from './pages/main/main/main.component';
import { ListProductsComponent } from './pages/main/list-products/list-products.component';
import { SearchComponent } from './pages/categories/search/search.component';
import { SpcialListComponent } from './pages/categories/spcial-list/spcial-list.component';
import { GenButtonsComponent } from '../app/pages/main/genbuttons/genbuttons.component';


library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    ChoiceComponent,
    MenuComponent,
    PostComponent,
    PostMenuComponent,
    FrameComponent,
    EditMenuComponent,
    DataFormComponent,
    FormComponent,
    PopUpComponent,
    ShoppingCarComponent,
    MainComponent,
    ListProductsComponent,
    SearchComponent,
    SpcialListComponent,

    GenButtonsComponent 
    

  ],
  imports: [ 
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
