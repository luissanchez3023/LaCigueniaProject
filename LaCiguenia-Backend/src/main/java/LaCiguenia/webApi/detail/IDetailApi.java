package LaCiguenia.webApi.detail;

import LaCiguenia.commons.domains.dto.detail.DetailDTO;
import LaCiguenia.commons.domains.responseDTO.GenericResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface IDetailApi {
    @PostMapping()
    ResponseEntity<GenericResponseDTO> createDetail(@RequestBody DetailDTO detailDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readDetail(@RequestBody DetailDTO detailDTO);
    @GetMapping()
    ResponseEntity<GenericResponseDTO> readDetails();
    @PutMapping()
    ResponseEntity<GenericResponseDTO> updateDetail(@RequestBody DetailDTO detailDTO);
    @DeleteMapping()
    ResponseEntity<GenericResponseDTO> deleteDetail(@PathVariable Integer detailId);
}
