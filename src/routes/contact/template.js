import '../../modules/page-template';
export default (ctx, html) => html`
<page-template>
   <h1 class="text-center">Contact Me</h1>
   <form class="row m-auto">
      <div class="form-group col-md-6">
         <label for="firstName">First Name</label>
         <input class="form-control" type="text" id="firstName">
      </div>
      <div class="form-group col-md-6">
         <label for="lastName">Last Name</label>
         <input class="form-control" type="text" id="lastName">
      </div>
      <div class="form-group col-md-12">
         <label for="email">Email</label>
         <input class="form-control" type="email" id="email">
      </div>
      <div class="form-group col-md-12">
         <label for="subject">Subject</label>
         <input class="form-control" type="text" id="subject">
      </div>
      <div class="form-group col-md-12">
         <label for="message">Message</label>
         <textarea class="form-control" id="message"></textarea>
      </div>
      <input type="submit" value="Submit" class="mx-3 btn btn-block btn-light">
   </form>
</page-template>
`;
