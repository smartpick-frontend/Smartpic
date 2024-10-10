import '../pages/upload-a.scss'

export default function Upload_attends() {
  return <div id="mains">
    <form action="/upload/parents" method="POST" encType="multipart/form-data">
        <label htmlFor="parent">Parent Image:</label>
        <input type="file" name="parent_image" id="parent" accept="image/*" required/>

        <label htmlFor="child">Child Image:</label>
        <input type="file" name="child_image" id="child" accept="image/*" required/>

        <button type="submit">Upload Images</button>
    </form>
  </div>;
}
